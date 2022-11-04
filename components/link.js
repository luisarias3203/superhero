import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const CustomLink = forwardRef(function Link(
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

export default CustomLink;
