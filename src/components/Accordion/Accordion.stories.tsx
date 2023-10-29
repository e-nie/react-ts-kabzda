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
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return <Accordion titleValue = 'Collapsed Accordion'
                      collapsed = {true}
                      onChange = {callback}
                      items = {[]}
                      onClick = {onClickCallback}
    />
}

export const UsersExpandedMode = () => {
    return <Accordion titleValue = 'Expanded Users'
                      collapsed = {false}
                      onChange = {callback}
                      onClick = {onClickCallback}
                      items = {[{title: 'Evchen', value: 1},
                          {title: 'Aloise', value: 2},
                          {title: 'Robert', value: 3},
                          {title: 'Mark', value: 4},
                          {title: 'Anna', value: 5}]}
    />
}

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue = 'Accordion'
                      collapsed = {value}
                      items = {[{title: 'Evchen', value: 1},
                          {title: 'Aloise', value: 2},
                          {title: 'Robert', value: 3},
                          {title: 'Mark', value: 4},
                          {title: 'Anna', value: 5}]}
                      onChange = {() => {
                          setValue(!value)
                      }}
                      onClick = {(id) => alert(`user with ID ${id} is very happy`)}
    />
}
