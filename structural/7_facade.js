class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply () { }

  add (complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply ({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply ({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register (customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') complaint = new ServiceComplaints();
    else complaint = new ProductComplaints();

    return complaint.add({ id, customer, details });
  }
}

const register = new ComplaintRegistry();
console.log(register.register('Vitali', 'service', 'unavailable'));
console.log(register.register('Elena', 'product', 'I got an error'));
