import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Alert } from 'react-native';

const appointmentsData = [
  {
    id: '1',
    service: 'Captioning',
    provider: 'Dr. Smith',
    location: 'Health Clinic',
    status: 'Scheduled',
    date: '2023-12-15',
    time: '10:00 AM',
  },
  {
    id: '2',
    service: 'Dental Cleaning',
    provider: 'Dr. Johnson',
    location: 'Dental Office',
    status: 'Ongoing',
    date: '2023-12-20',
    time: '02:30 PM',
  },
  {
    id: '3',
    service: 'Eye Exam',
    provider: 'Dr. Davis',
    location: 'Optical Center',
    status: 'Completed',
    date: '2023-12-25',
    time: '09:15 AM',
  },
  {
    id: '4',
    service: 'Captioning',
    provider: 'Dr. Smith',
    location: 'Health Clinic',
    status: 'Scheduled',
    date: '2023-12-15',
    time: '10:00 AM',
  },
  {
    id: '5',
    service: 'Dental Cleaning',
    provider: 'Dr. Johnson',
    location: 'Dental Office',
    status: 'Ongoing',
    date: '2023-12-20',
    time: '02:30 PM',
  },
  {
    id: '6',
    service: 'Eye Exam',
    provider: 'Dr. Davis',
    location: 'Optical Center',
    status: 'Completed',
    date: '2023-12-25',
    time: '09:15 AM',
  },
  {
    id: '7',
    service: 'Captioning',
    provider: 'Dr. Smith',
    location: 'Health Clinic',
    status: 'Scheduled',
    date: '2023-12-15',
    time: '10:00 AM',
  },
  {
    id: '8',
    service: 'Dental Cleaning',
    provider: 'Dr. Johnson',
    location: 'Dental Office',
    status: 'Ongoing',
    date: '2023-12-20',
    time: '02:30 PM',
  },
  {
    id: '9',
    service: 'Eye Exam',
    provider: 'Dr. Davis',
    location: 'Optical Center',
    status: 'Completed',
    date: '2023-12-25',
    time: '09:15 AM',
  },
];

const AppointmentItem = ({ item, onPressDetails }) => (
  <TouchableOpacity style={styles.appointmentItem} onPress={() => onPressDetails(item)}>
    <View style={styles.appointmentInfo}>
      <Text style={styles.appointmentText}>{item.service}</Text>
      <Text style={styles.appointmentText}>{item.provider}</Text>
      <Text style={styles.appointmentText}>{item.location}</Text>
    </View>
    <View style={styles.statusContainer}>
      <Text style={[styles.appointmentStatus, getStatusColor(item.status)]}>{item.status}</Text>
    </View>
  </TouchableOpacity>
);

const AppointmentDetailsModal = ({ appointment, onCancel, onRate, onEndService, onCloseModal }) => {
  const handleCancel = () => {
    Alert.alert(
      'Confirm Cancellation',
      'Are you sure you want to cancel this service?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: onCancel },
      ],
      { cancelable: false }
    );
  };

  const handleRateService = () => {
    Alert.alert('Rate Service', 'Rate the service provider:', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Submit', onPress: onRate },
    ]);
  };

  const handleEndService = () => {
    Alert.alert(
      'End Service',
      'Are you sure you want to end this service?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: onEndService },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Details for the selected appointment:</Text>
      <Text style={styles.modalText}>Service: {appointment.service}</Text>
      <Text style={styles.modalText}>Provider: {appointment.provider}</Text>
      <Text style={styles.modalText}>Location: {appointment.location}</Text>
      <Text style={styles.modalText}>Status: {appointment.status}</Text>
      <Text style={styles.modalText}>Date: {appointment.date}</Text>
      <Text style={styles.modalText}>Time: {appointment.time}</Text>

      {appointment.status === 'Scheduled' && (
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelButton}>Cancel Service</Text>
        </TouchableOpacity>
      )}

      {appointment.status === 'Completed' && (
        <TouchableOpacity onPress={handleRateService}>
          <Text style={styles.actionButton}>Rate Service</Text>
        </TouchableOpacity>
      )}

      {appointment.status === 'Ongoing' && (
        <TouchableOpacity onPress={handleEndService}>
          <Text style={styles.actionButton}>End Service</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onCloseModal}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Scheduled':
      return styles.scheduledText;
    case 'Ongoing':
      return styles.ongoingText;
    case 'Completed':
      return styles.completedText;
    default:
      return null;
  }
};

const AppointmentsScreen = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handlePressDetails = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCancelService = () => {
    // Implement cancellation logic here
    console.log('Service Canceled!');
    setSelectedAppointment(null);
  };

  const handleRateService = () => {
    // Implement rating logic here
    console.log('Service Rated!');
    setSelectedAppointment(null);
  };

  const handleEndService = () => {
    // Implement end service logic here
    console.log('Service Ended!');
    setSelectedAppointment(null);
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={appointmentsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppointmentItem item={item} onPressDetails={handlePressDetails} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Modal visible={selectedAppointment !== null} animationType="slide">
        <AppointmentDetailsModal
          appointment={selectedAppointment}
          onCancel={handleCancelService}
          onRate={handleRateService}
          onEndService={handleEndService}
          onCloseModal={handleCloseModal}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appointmentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentText: {
    fontSize: 16,
  },
  statusContainer: {
    marginLeft: 'auto',
  },
  appointmentStatus: {
    fontWeight: 'bold',
  },
  scheduledText: {
    color: 'gold',
  },
  ongoingText: {
    color: 'blue',
  },
  completedText: {
    color: 'green',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  cancelButton: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  actionButton: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
  closeButton: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
});

export default AppointmentsScreen;


