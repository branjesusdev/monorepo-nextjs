import { ButtonUI, TypographyUI } from "@repo/ui";
import { AlertUI } from "@repo/ui/feedback";
import { ContainerUI } from "@repo/ui/layout";
import { CardSummary } from "./CardSummary";
import { AsideActionsSummary } from "@/features/banking/components/AsideActionsSummary";
import MESSAGES from "@/entry-point/config/messages.json";

interface TransactionSummaryProps {
  title: string;
  subtitle: string;
  dataRender: {
    label: string;
    value: string;
  }[];
  handlePrint: () => void;
  handleDownload: () => void;
  actionTextFirst: string;
}

export const TransactionSummary = ({
  title,
  subtitle,
  actionTextFirst,
  dataRender,
  handleDownload,
  handlePrint,
}: TransactionSummaryProps) => {
  return (
    <ContainerUI maxWidth="md" className="h-full">
      <div className="flex h-full gap-4">
        <div className="flex flex-col flex-1 gap-10">
          <AlertUI severity="success" className="w-full">
            {title}
          </AlertUI>

          {/* TITULO */}

          <TypographyUI
            color="textPrimary"
            variant="h6"
            component="h1"
            className="!mx-auto !font-bold text-center"
          >
            {subtitle}
          </TypographyUI>

          {/* RENDERIZADO DE DATOS */}

          <CardSummary data={dataRender} />

          {/* BOTONES DE NAVEGACIÓN */}

          <footer className="flex flex-row justify-between mt-auto mb-16">
            <ButtonUI variant="contained" className="!min-w-[250px]">
              {actionTextFirst}
            </ButtonUI>
            <ButtonUI variant="outlined" className="!min-w-[250px]">
              {MESSAGES.dashboard.banking.stepper.backHome}
            </ButtonUI>
          </footer>
        </div>

        {/* ACCIONES DE IMPRESIÓN Y DESCARGA */}

        <AsideActionsSummary
          onPrint={handlePrint}
          onDownload={handleDownload}
        />
      </div>
    </ContainerUI>
  );
};
