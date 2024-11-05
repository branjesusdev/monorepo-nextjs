"use client";

import { useBankingStore } from "@/features/banking/store/bankingStore";
import { BreadcrumbsUI, StepperRouteUI } from "@repo/ui/navigation";
import { usePathname } from "next/navigation";
import { FormStep } from "@/features/banking/models/types/banking";
import { dashboardRoutes } from "@/entry-point/config/routes.config";
import { getLabelTransactionType } from "@/features/banking/banking.config";
import { BackdropUI } from "@repo/ui/feedback";
import { TypographyUI } from "@repo/ui";

export const BankingProductLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const { transactionType, selectedProduct, loadingBackdrop } =
    useBankingStore();
  const labelTransaction = getLabelTransactionType(transactionType as any);

  const detectedPath = () => {
    const route = dashboardRoutes(selectedProduct?.id, transactionType);
    return {
      form: route.banking.form,
      confirm: route.banking.confirm,
      summary: route.banking.summmary,
    };
  };

  const steps = [
    { label: FormStep.DETAILS, path: detectedPath().form },
    { label: FormStep.CONFIRM, path: detectedPath().confirm },
    { label: FormStep.FINISH, path: detectedPath().summary },
  ];

  const breadcrumbs = [
    { label: "Corresponsalía", href: "/" },
    { label: `Banco ${selectedProduct?.name}`, href: "/" },
    { label: `${labelTransaction}`, current: true, href: "/" },
  ];

  return (
    <>
      <section className="flex flex-col gap-5 h-full">
        <BreadcrumbsUI links={breadcrumbs} />
        <StepperRouteUI steps={steps} pathname={pathname} />
        {children}

        <BackdropUI open={loadingBackdrop.isLoading} isLoading className="flex flex-col">
          {loadingBackdrop.message && (
            <div className="mt-2 flex flex-col gap-2 text-center">
              <TypographyUI variant="h6" component="h1" color="black" fontWeight={700} fontSize={24}>
                {loadingBackdrop.message.title}
              </TypographyUI>
              <TypographyUI variant="body2" component="p" color="black" fontWeight={400} fontSize={18}>
                {loadingBackdrop.message.description}
              </TypographyUI>
            </div>
          )}
        </BackdropUI>
      </section>
    </>
  );
};
