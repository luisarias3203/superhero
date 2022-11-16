import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const CustomLink = forwardRef(function Link({
  href,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}) {
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
