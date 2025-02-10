import {useState} from "react";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import tw from "twrnc";
import {ItemModel} from "../../model/Item";

export default function RootLayout() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [items, setItems] = useState<ItemModel[]>([])
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    function handleSubmit() {
        if (editingIndex !== null){
            const updatedItems = [...items];
            updatedItems[editingIndex] = new ItemModel(name, parseFloat(price), parseFloat(quantity));
            setItems(updatedItems);
            setEditingIndex(null);
        }else{
            const newItem = new ItemModel(name, parseFloat(price), parseFloat(quantity));
            setItems([...items, newItem]);
        }
        setName('');
        setPrice('');
        setQuantity('');
    }

    function editItem(index: number){
        const item = items[index];
        setName(item.name);
        setPrice(item.price.toString());
        setQuantity(item.quantity.toString());
        setEditingIndex(index);
    }

    function deleteItem(index: number){
        const filteredItems = items.filter((_, i) => i !== index);
        setItems(filteredItems);
    }

    return (
        <View style={[tw`flex-1 items-center bg-gray-50 p-6`, styles.container]}>
              <Text style={styles.heading}>Item Details</Text>

                <View style = {styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Enter item name"}
                        placeholderTextColor="#666"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Enter item price"}
                        placeholderTextColor="#666"
                        value={price}
                        keyboardType="phone-pad"
                        onChangeText={setPrice}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Enter item quantity"}
                        placeholderTextColor="#666"
                        value={quantity}
                        keyboardType="phone-pad"
                        onChangeText={setQuantity}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>
                            {editingIndex !== null ? "Update Items" : "Add Items"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={tw`mt-6 w-full`}
                    data={items}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.card}>
                            <Text style={styles.cardName}>{item.name}</Text>
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardLabel}>Price:</Text>
                                <Text style={styles.cardValue}>{item.price}</Text>
                            </View>
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardLabel}>Quantity:</Text>
                                <Text style={styles.cardValue}>{item.quantity}</Text>
                            </View>
                            <View style={styles.cardActions}>
                                <TouchableOpacity style={styles.editButton} onPress={() => editItem(index)}>
                                    <Text style={styles.buttonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 24,
        letterSpacing: 0.5,
    },
    formContainer: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    input: {
        marginBottom: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 12,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        color: '#333',
    },
    button: {
        backgroundColor: '#4F46E5',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#4F46E5',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cardName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    cardDetails: {
        flexDirection: 'row',
        marginTop: 4,
    },
    cardLabel: {
        fontSize: 14,
        color: '#666',
        width: 60,
    },
    cardValue: {
        fontSize: 14,
        color: '#333',
        flex: 1,
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    editButton: {
        backgroundColor: '#10B981',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 6,
    },
    deleteButton: {
        backgroundColor: '#EF4444',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 6,
    },
});