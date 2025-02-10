import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { CustomerModel } from "../../model/Customer";
import tw from "twrnc";

export default function Customer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [customers, setCustomers] = useState<CustomerModel[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null)

    function handleSubmit() {
    if (editingIndex !== null){
        //update existing customer
        const updatedCustomers = [...customers];
        updatedCustomers[editingIndex] = new CustomerModel(name, email, mobile);
        setCustomers(updatedCustomers);
        setEditingIndex(null);
    }else{
        const newCustomer = new CustomerModel(name, email, mobile);
        setCustomers([...customers, newCustomer]);
    }
        setName('');
        setEmail('');
        setMobile('');
    }

    function editCustomer(index: number){
        const customer = customers[index];
        setName(customer.name);
        setEmail(customer.email);
        setMobile(customer.mobile);
        setEditingIndex(index);
    }

    function deleteCustomer(index: number){
        const filteredCustomers = customers.filter((_, i) => i !== index);
        setCustomers(filteredCustomers);
    }

    return (
        <View style={[tw`flex-1 items-center bg-gray-50 p-6`, styles.container]}>
            <Text style={styles.heading}>Customer Details</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#666"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile"
                    placeholderTextColor="#666"
                    value={mobile}
                    keyboardType="phone-pad"
                    onChangeText={setMobile}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        {editingIndex !== null ? 'Update Customer' : 'Add Customer'}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={tw`mt-6 w-full`}
                data={customers}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardName}>{item.name}</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardLabel}>Email:</Text>
                            <Text style={styles.cardValue}>{item.email}</Text>
                        </View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardLabel}>Mobile:</Text>
                            <Text style={styles.cardValue}>{item.mobile}</Text>
                        </View>
                        <View style={styles.cardActions}>
                            <TouchableOpacity style={styles.editButton} onPress={() => editCustomer(index)}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteCustomer(index)}>
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