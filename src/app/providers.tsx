'use client'
import React from "react";
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

export class Providers extends React.Component<{ children: React.ReactNode }> {
  render() {
    return (
      <NextUIProvider>
        <NextThemesProvider attribute="class">
          {this.props.children}
        </NextThemesProvider>
      </NextUIProvider >
    )
  }
}