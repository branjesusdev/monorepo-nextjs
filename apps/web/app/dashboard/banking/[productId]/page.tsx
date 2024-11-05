import { TransactionFlowPage } from "@/features/banking/pages/TransactionFlowPage";
// import { notFound } from "next/navigation";
// import { bankProducts } from "@/features/banking/banking.config";

export default function Page() {
  // const product = bankProducts.find(
  //   (product) => product.id === params.productId
  // );

  // if (!product) {
  //   notFound();
  // }

  return <TransactionFlowPage />;
}

// export function generateStaticParams() {
//   return bankProducts.map((product) => ({
//     productId: product.id,
//   }));
// }
