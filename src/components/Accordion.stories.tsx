import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import Accordion from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion
};

export default {
    component: Accordion
};

const onChangeHandler = action('on Change')

export const CollapsedAccordion = () => {
    return <Accordion titleValue = 'Collapsed Accordion'
                      collapsed = {true}
                      onChange = {onChangeHandler} />
}

export const ExpandedAccordion = () => {
    return <Accordion titleValue = 'Expanded Accordion'
                      collapsed = {false}
                      onChange = {() => {
                      }} />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue = 'Accordion'
                      collapsed = {collapsed}
                      onChange = {() => {
                          setCollapsed(!collapsed)
                      }} />
}
