import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";
import PropTypes from'prop-types';
import IconButton from "./IconButton";
import { images } from "../img";

const Task ({ text }) => {
    return (
        <View style={taskStyle.container}>
            <IconButton type = {images.uncompleted}></IconButton>
            <Text style={taskStyle.contents}>{text}</Text>
            <IconButton type = {images.update} />
            <IconButton type = {images.delete} />
        </View>
    )
}

