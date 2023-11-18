import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function ListAuthorDuration({ data, onSelect }) {
    const [selectedItems, setSelectedItems] = useState({});

    const handleItemSelected = (id, listId) => {
        const updatedSelectedItems = { ...selectedItems };
        if (updatedSelectedItems[listId] === id) {
            delete updatedSelectedItems[listId];
        } else {
            updatedSelectedItems[listId] = id;
        }
        setSelectedItems(updatedSelectedItems);

        onSelect(updatedSelectedItems);
    };

    const FlatListRowDuration = ({ dataList, listId }) => {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={[
                    styles.pressable,
                    { backgroundColor: item.id === selectedItems[listId] ? '#ffffff' : 'rgba(34, 35, 39, 0.84)' },
                ]}
                onPress={() => handleItemSelected(item.id, listId)}
            >
                <Text
                    style={[styles.textTitleTimer, { color: item.id === selectedItems[listId] ? '#000000' : '#ffffff' }]}
                >
                    {item.title + ' min'}
                </Text>
            </TouchableOpacity>
        );

        return (
            <SafeAreaView>
                <FlatList
                    horizontal={true}
                    data={dataList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={4}
                />
            </SafeAreaView>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PICK A NARRATOR & DURATION</Text>
            {data.map((elem) => (
                <View style={styles.timerRow} key={elem.idAuthor}>
                    <Text style={styles.textTimerRow}>{elem.author}</Text>
                    <FlatListRowDuration dataList={elem.dataTime} listId={elem.idAuthor} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    title: {
        fontFamily: 'sans-serif',
        color: '#9c9c9c',
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
    },
    timerRow: {
        marginVertical: 10,
    },
    textTimerRow: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
    },
    listTimerRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    pressable: {
        borderRadius: 20,
        elevation: 5,
        width: 70,
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    textTitleTimer: {
        fontFamily: 'sans-serif',
        color: '#ffffff',
        fontSize: 16,
        alignSelf: 'center',
    },
});
