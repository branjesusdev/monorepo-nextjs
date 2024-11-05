import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { TypographyUI } from "../base/Typography";
import { forwardRef } from "react";
import styled from "@emotion/styled";

const StyleBreadcrumbs = styled(Breadcrumbs)`
  font-size: 1.2rem;
  line-height: 1.2;
  position: relative;
  color var(--breadcrumb-color);

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    color: var(--breadcrumb-color-active);
  }

  a {
    text-decoration: none;
    color: var(--breadcrumb-color);
    &:hover {
      text-decoration: none;
    }
  }

  &:before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;
    border-radius: 15px;
    background-color: var(--divider-color);
    height: 2px;
  }
`;

export type BreadcrumbsUIProps = {
  links: Array<{ label: string; href: string; current?: boolean }>;
};

export const BreadcrumbsUI = forwardRef<HTMLDivElement, BreadcrumbsUIProps>(
  ({ links }, ref) => {
    return (
      <StyleBreadcrumbs
        className="style-breadcrumbs"
        aria-label="breadcrumb"
        ref={ref}
      >
        {links.map((link, index) =>
          link.current ? (
            <TypographyUI
              key={index}
              color="textPrimary"
              aria-current="page"
            >
              {link.label}
            </TypographyUI>
          ) : (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={link.href}
              sx={{ fontFamily: "Lato, sans-serif" }}
            >
              {link.label}
            </Link>
          )
        )}
      </StyleBreadcrumbs>
    );
  }
);

export default BreadcrumbsUI;
