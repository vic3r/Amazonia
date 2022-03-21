import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Amazonia</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazonia</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved</Typography>
      </footer>
    </div>
  );
}
