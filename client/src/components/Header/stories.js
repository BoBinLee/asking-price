import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from "./";


storiesOf("Header", module)
    .add("with Header", () => (
        <Header />
    ));
