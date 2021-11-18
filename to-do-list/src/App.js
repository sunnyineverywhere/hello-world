import React, {useState} from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import {View} from 'react-native';
import {ViewStyles, textStyles} from './styles';
import Input from './components/Input';
import { images } from "./img";
import IconButton from "./components/IconButton";

export default function App() {
    const [newTask, setNewTask] = useState('');

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        setNewTask('');
    }

    const _handleTextChange = text => {
        setNewTask('');
    }

    return (
        <SafeAreaView style = {ViewStyles.container}> <StatusBar barStyle="light-content" style = {textStyles.statusbar}></StatusBar>
        <Text style = {textStyles.title}>TODO List</Text>
        <IconButton type = {images.uncompleted}></IconButton>
        <IconButton type = {images.compeleted}></IconButton>
        <IconButton type = {images.delete}></IconButton>
        <IconButton type = {images.update}></IconButton>
        </SafeAreaView>
    );
};