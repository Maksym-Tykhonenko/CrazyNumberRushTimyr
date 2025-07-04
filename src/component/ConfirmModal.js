import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmModal = ({ visible, onConfirm, onCancel }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>You will delete item from favorites</Text>
                    <Text style={styles.message}>
                        Are you sure you want to delete this item from your favorites?
                    </Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={onConfirm} style={styles.yesButton}>
                            <Text style={styles.yesText}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#222',
        padding: 20,
        borderRadius: 15,
        width: '85%',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    message: {
        color: '#ccc',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    yesButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#222',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f00',
    },
    cancelButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#222',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00f',
    },
    yesText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '600',
    },
    cancelText: {
        textAlign: 'center',
        color: '#00f',
        fontWeight: '600',
    },
});

export default ConfirmModal;
