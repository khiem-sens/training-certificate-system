'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Link as AriaLink, LinkProps as AriaLinkProps, PressEvent } from 'react-aria-components'

interface CustomAriaLinkProps extends AriaLinkProps {
  replace?: boolean
}

const CustomAriaLink: React.FC<CustomAriaLinkProps> = ({
  replace = false,
  href,
  onPress,
  ...props
}) => {
  const router = useRouter()

  const handlePress = (e: PressEvent) => {
    if (replace) {
      router.replace(href as string)
    } else {
      router.push(href as string)
    }
  }

  return (
    <AriaLink
      {...props}
      href={href}
      onPress={handlePress}
    >
      {props.children}
    </AriaLink>
  )
}

export default CustomAriaLink
