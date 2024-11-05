import { ButtonUI, TypographyUI } from "@repo/ui";
import MESSAGES from "@/entry-point/config/messages.json";
import { IconWarningCircleUI } from "@repo/ui/icon";

interface NotFoundProductProps {
  retry: () => void;
}

export const NotFoundProduct = ({ retry }: NotFoundProductProps) => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center">
      <div className="flex flex-col gap-8 text-center justify-center items-center w-[50ch] ">
        <IconWarningCircleUI width={75} height={75} fillColorPath="primary" fillColor="none" />

        <TypographyUI
          variant="h1"
          fontWeight={700}
          fontSize={22}
          color="textSecondary"
          className="text-center"
        >
          {MESSAGES.dashboard.banking.messages.notFound.title}
        </TypographyUI>
        <TypographyUI
          variant="h2"
          fontWeight={400}
          fontSize={18}
          color="textPrimary"
          className="text-center"
        >
          {MESSAGES.dashboard.banking.messages.notFound.description}
        </TypographyUI>

        <ButtonUI
          variant="contained"
          color="primary"
          onClick={retry}
          className="w-[270px] mx-auto !mt-10"
        >
          {MESSAGES.generics.button.uppercase.retry}
        </ButtonUI>
      </div>
    </div>
  );
};
