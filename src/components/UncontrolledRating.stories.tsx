import {action} from '@storybook/addon-actions';
import {UncontrolledRating, RatingValueType} from "./UncontrolledRating";
import {useState} from "react";

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating
};

const  callback = action('rating changed inside component')
export const EmptyStars = () => <UncontrolledRating defaultValue = {0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue = {1}  onChange={callback} />
export const Rating2 = () => <UncontrolledRating defaultValue = {2}  onChange={callback} />
export const Rating3 = () => <UncontrolledRating defaultValue = {3}  onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue = {4}   onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue = {5}   onChange={callback}/>



