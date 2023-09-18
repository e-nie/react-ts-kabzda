import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion
};

export default {
    component: Accordion
};

const callback = action('Accordion mode change event fired')

export const MenuCollapsedMode = () => {
    return <Accordion titleValue = 'Collapsed Accordion'
                      collapsed = {true}
                      onChange = {callback} />
}

export const UsersExpandedMode = () => {
    return <Accordion titleValue = 'Expanded Users'
                      collapsed = {false}
                      onChange = {callback} />
}

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue = 'Accordion'
                      collapsed = {value}
                      onChange = {() => {
                          setValue(!value)
                      }} />
}
