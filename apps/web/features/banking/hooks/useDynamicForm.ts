import { useForm, type DefaultValues } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SchemaTypeField } from '@/entry-point/model/common';
import type { AnyObject } from 'yup';

interface UseDynamicFormProps {
  defaultValues?: object;
  schema: object;
}

export const useDynamicForm = ({ schema, defaultValues }: UseDynamicFormProps) => {

  const schemaFilds = schema as AnyObject;
  type SchemaTypeFields = keyof typeof schemaFilds["fields"];


  const { register, handleSubmit, formState: { errors, isValid }, control, watch, reset } = useForm({
    resolver: yupResolver(schema as any) as any,
    mode: 'onTouched',
    defaultValues: defaultValues as DefaultValues<AnyObject> ?? {},
  });

  const dependencyFields = useMemo(() => {
    const fieldsDep = Object.keys(schemaFilds.describe().fields)
      .filter(field => schemaFilds.describe().fields[field]?.meta?.dependsOn)
      .map(field => schemaFilds.describe().fields[field]?.meta?.dependsOn)

    return [...new Set(fieldsDep)];

  }, [schema]);

  const dependencies = watch(dependencyFields);

  const mapperValues = useMemo(() => {
    return dependencyFields.reduce((acc, field) => {
      acc[field] = watch(field);
      return acc;
    }, {} as Record<SchemaTypeFields, any>)
  }, [dependencies]);


  const resetChangeFields = useMemo(() => {
    return Object.keys(schemaFilds.describe().fields)
      .filter(field => schemaFilds.describe().fields[field]?.meta?.resetChange);
  }, [schemaFilds]);

  // Almacena el valor anterior de los campos dependientes
  const prevDependentValues = useRef<Record<string, any>>({});

  // Observa todos los valores del formulario
  const allValues = watch();

  useEffect(() => {
    const currentDependentValues = resetChangeFields.reduce((acc: Record<string, any>, field) => {
      acc[field] = allValues[field];
      return acc;
    }, {});

    console.log('currentDependentValues', currentDependentValues);
    

    const hasChanged = resetChangeFields.some(
      field => prevDependentValues.current[field] !== currentDependentValues[field]
    );

    if (hasChanged) {

      const resetDefaultValues = resetChangeFields.reduce((acc: Record<string, any>, field) => {
        acc[field] = '';
        return acc;
      }, {});

      reset({ ...resetDefaultValues, ...currentDependentValues });
      prevDependentValues.current = currentDependentValues;
    }
  }, [allValues, resetChangeFields, reset]);


  useEffect(() => {
    if (Object.keys(errors).length) {
      const firstError = Object.keys(errors)[0];
      if (!firstError)
        return;
      const element = document.getElementsByName(firstError)[0] as HTMLInputElement;
      element.focus();
    }
  }, [errors]);


  const schemaFields = useMemo(() => {
    return Object.keys(schemaFilds.describe().fields);
  }, [schema]);

  const unwrapSchema = useCallback(
    (schemaField: SchemaTypeFields) => {
      const fields = schemaFilds.describe().fields;
      let type = fields[schemaField]?.type || 'unknown';
      const meta = fields[schemaField]?.meta as SchemaTypeField || null;

      if (meta?.isRadio)
        type = 'radio';

      if (meta?.isSelect)
        type = 'select';

      return {
        type,
        meta
      }
    },
    [schema]
  );

  const shouldShowField = useCallback(
    (field: SchemaTypeFields) => {
      const meta = unwrapSchema(field).meta;
      if (!meta || !meta.dependsOn) return true;

      const dependsOnField = meta.dependsOn;
      const dependsOnValue = mapperValues[dependsOnField];

      if (typeof meta.visibleWhen === 'function') {
        return meta.visibleWhen(dependsOnValue);
      }

      return true;

    },
    [mapperValues, unwrapSchema]
  );

  const extractMetaData = useCallback(
    ({ formData, schemaFields }: { formData: any, schemaFields: SchemaTypeFields[] }) => {
      return schemaFields.reduce((acc, field) => {
        const { meta } = unwrapSchema(field);
        const value = formData[field];
        acc[field] = {
          valueForm: value,
          ...meta
        }
        return acc;
      }, {} as Record<SchemaTypeFields, SchemaTypeField>)
    }, [schemaFields]
  )

  return {
    schemaFields: Object.keys(schemaFilds.describe().fields).filter(shouldShowField),
    unwrapSchema,
    register,
    control,
    handleSubmit,
    errors,
    isValid,
    schema,
    watch,
    extractMetaData
  };
};
