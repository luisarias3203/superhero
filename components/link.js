import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { forwardRef } from 'react';

/**
 * A convenience component that wraps the MUI `Link` component that provides
 * our look & feel with Next's router `Link`
 *
 * @see https://nextjs.org/docs/api-reference/next/link
 */
const Link = forwardRef(function Link(
  { href, prefetch, replace, scroll, shallow, locale, ...props },
  ref
) {
  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      <Button {...props} />
    </NextLink>
  );
});

export default Link;
