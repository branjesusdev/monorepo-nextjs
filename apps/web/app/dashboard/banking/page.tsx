import { ProductSelectorPage } from "@/features/banking/pages/ProductSelectorPage";
import { MainLayout } from "@/layouts/main";

export default function PageBanking() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-center my-5">Corresponsalía</h1>
      <ProductSelectorPage></ProductSelectorPage>
    </MainLayout>
  );
}
