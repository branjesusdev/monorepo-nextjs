"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { FC, PropsWithChildren } from "react";

import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { ThemeProvider } from "@repo/ui/theme";

type Props = PropsWithChildren<{
  /**
   * next-auth session
   */
  session?: Session | null;
}>;

export const AppProviders: FC<Props> = (props) => {
  const { children, session } = props;
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <ThemeProvider>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};
