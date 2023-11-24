import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function ListAuthorDuration({ data, onSelect }) {
    const [selectedItems, setSelectedItems] = useState({});

    const handleItemSelected = (id, listId) => {
        const updatedSelectedItems = {};
    
        Object.keys(selectedItems).forEach(key => {
            if (selectedItems[key] === id && key !== listId) {
                updatedSelectedItems[key] = null;
            }
        });
    
        if (selectedItems[listId] === id) {
            delete selectedItems[listId];
        } else {
            updatedSelectedItems[listId] = id;
        }
    
        setSelectedItems(updatedSelectedItems);
    
        const selectedItemInfo = updatedSelectedItems[listId] ? { [listId]: updatedSelectedItems[listId] } : {};
        onSelect(selectedItemInfo);
    };

    const FlatListRowDuration = ({ dataList, listId }) => {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={[
                    styles.pressable,
                    { backgroundColor: item.idTimeDetail === selectedItems[listId] ? '#ffffff' : 'rgba(34, 35, 39, 0.84)' },
                ]}
                onPress={() => handleItemSelected(item.idTimeDetail, listId)}
            key={item.idTimeDetail}
            >
                <Text
                    style={[styles.textTitleTimer, { color: item.idTimeDetail === selectedItems[listId] ? '#000000' : '#ffffff' }]}
                >
                    {item.time + ' min'}
                </Text>
            </TouchableOpacity>
        );

        return (
            <SafeAreaView>
                <FlatList
                    horizontal={true}
                    data={dataList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.idTimeDetail}
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
                    <FlatListRowDuration dataList={elem.timeDetail} listId={elem.idAuthor}/>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 35, 39, 0.84)',
        borderRadius: 10,
        marginTop: 10,
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
