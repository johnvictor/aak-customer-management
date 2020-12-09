export enum FormControlNameMapping {
    dateOfEntry = 'Date of entry',
    customerName = 'Customer name',
    fatherName = 'Father name',
    contactNo = 'Contact Number',
    alternateNo = 'Alternate Number',
    address = 'Address',
    landmark = 'Landmark'
}

export const addUserFormConfig = {
    dateOfEntry: {
        label: 'Date of Entry',
        icon: 'calendar-outline',
        type: 'text',
        minlength: '1',
        maxlength: '40'
    },
    customerName: {
        label: 'Customer Name',
        icon: 'person-outline',
        type: 'text',
        minlength: '1',
        maxlength: '40'
    },
    fatherName: {
        label: 'Father Name',
        icon: 'person-sharp',
        type: 'text',
        minlength: '1',
        maxlength: '40'
    },
    contactNo: {
        label: 'Contact Number',
        icon: 'call-outline',
        type: 'tel',
        minlength: '10',
        maxlength: '10'
    },
    alternateNo: {
        label: 'Alternate Number',
        icon: 'call-sharp',
        type: 'tel',
        minlength: '10',
        maxlength: '10'
    },
    address: {
        label: 'Address',
        icon: 'location-outline',
        type: 'text',
        minlength: '1',
        maxlength: '250'
    },
    landmark: {
        label: 'Landmark',
        icon: 'flag-outline',
        type: 'text',
        minlength: '1',
        maxlength: '250'
    }
};
