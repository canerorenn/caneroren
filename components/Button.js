import React from 'react'

import Link from 'next/link'

export default function Button(props) {

  const {
    id,
    tag,
    disabled,
    content,
    href,
    classname,
    onClick,
    ...rest
  } = props;

  if (tag == "a") {
    return (
      <a
        id={id}
        href={href}
        className={classname}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  } else if (tag == "link") {
    return (
      <Link href={href}>
        <a
          className={classname}
          id={id}
          onClick={onClick}
          {...rest}
        >
          {content}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        id={id}
        onClick={onClick}
        className={classname}
        type="button"
        disabled={disabled}
        {...rest}
      >
        {content}
      </button>
    );
  }
}
