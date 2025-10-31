// src/services/mockEmployeeService.js
// این سرویس جایگزین employeeService واقعی میشه تا زمانی که API آماده بشه

// داده‌های نمونه
const mockEmployees = [
  {
    id: 1,
    name: 'علی محمدی',
    email: 'ali.mohammadi@company.com',
    phone: '09123456789',
    department: 'فنی و توسعه',
    position: 'توسعه‌دهنده فول‌استک',
    hire_date: '2023-01-15',
    salary: '15000000',
    address: 'تهران، خیابان ولیعصر',
    status: 'active'
  },
  {
    id: 2,
    name: 'فاطمه کریمی',
    email: 'fateme.karimi@company.com',
    phone: '09129876543',
    department: 'فروش و بازاریابی',
    position: 'مدیر فروش',
    hire_date: '2022-08-20',
    salary: '12000000',
    address: 'تهران، میدان ونک',
    status: 'active'
  },
  {
    id: 3,
    name: 'محمد رضایی',
    email: 'mohammad.rezaei@company.com',
    phone: '09121112233',
    department: 'مالی و حسابداری',
    position: 'حسابدار',
    hire_date: '2023-03-10',
    salary: '10000000',
    address: 'تهران، شهرک غرب',
    status: 'active'
  },
  {
    id: 4,
    name: 'زهرا احمدی',
    email: 'zahra.ahmadi@company.com',
    phone: '09124445566',
    department: 'منابع انسانی',
    position: 'متخصص منابع انسانی',
    hire_date: '2022-11-05',
    salary: '11000000',
    address: 'کرج، بلوار موذن',
    status: 'active'
  },
  {
    id: 5,
    name: 'رضا حسینی',
    email: 'reza.hosseini@company.com',
    phone: '09127778899',
    department: 'فنی و توسعه',
    position: 'توسعه‌دهنده فرانت‌اند',
    hire_date: '2023-06-15',
    salary: '13000000',
    address: 'تهران، پاسداران',
    status: 'inactive'
  },
  {
    id: 6,
    name: 'سارا نوروزی',
    email: 'sara.norouzi@company.com',
    phone: '09123334455',
    department: 'پشتیبانی',
    position: 'کارشناس پشتیبانی',
    hire_date: '2023-02-28',
    salary: '9000000',
    address: 'تهران، سعادت آباد',
    status: 'active'
  },
  {
    id: 7,
    name: 'امیر عباسی',
    email: 'amir.abbasi@company.com',
    phone: '09126667788',
    department: 'مدیریت',
    position: 'مدیر پروژه',
    hire_date: '2021-12-01',
    salary: '18000000',
    address: 'تهران، نیاوران',
    status: 'active'
  },
  {
    id: 8,
    name: 'نازنین جعفری',
    email: 'nazanin.jafari@company.com',
    phone: '09129990011',
    department: 'فروش و بازاریابی',
    position: 'تحلیلگر کسب‌وکار',
    hire_date: '2023-04-22',
    salary: '11500000',
    address: 'تهران، فرمانیه',
    status: 'active'
  }
];

// شبیه‌سازی تاخیر API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockEmployeeService = {
  // GET all employees با pagination
  getAll: async (params = {}) => {
    await delay(800); // تاخیر شبیه‌سازی شده
    
    const page = params.page || 1;
    const perPage = params.per_page || 10;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    
    // فیلتر کردن داده‌ها بر اساس جستجو (اگر وجود داشته باشد)
    let filteredData = mockEmployees;
    if (params.search) {
      const searchTerm = params.search.toLowerCase();
      filteredData = mockEmployees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm) ||
        emp.email.toLowerCase().includes(searchTerm) ||
        emp.department.toLowerCase().includes(searchTerm)
      );
    }
    
    const paginatedData = filteredData.slice(startIndex, endIndex);
    
    return {
      data: {
        data: paginatedData,
        total: filteredData.length,
        current_page: page,
        per_page: perPage,
        last_page: Math.ceil(filteredData.length / perPage)
      }
    };
  },

  // GET single employee
  getById: async (id) => {
    await delay(500);
    const employee = mockEmployees.find(emp => emp.id === parseInt(id));
    
    if (!employee) {
      throw new Error('کارمند یافت نشد');
    }
    
    return { data: { data: employee } };
  },

  // CREATE new employee
  create: async (employeeData) => {
    await delay(1000);
    
    const newEmployee = {
      id: Math.max(...mockEmployees.map(emp => emp.id)) + 1,
      ...employeeData,
      status: 'active',
      created_at: new Date().toISOString()
    };
    
    mockEmployees.unshift(newEmployee); // اضافه کردن به ابتدای آرایه
    
    return { 
      data: { 
        data: newEmployee,
        message: 'کارمند با موفقیت ایجاد شد'
      } 
    };
  },

  // UPDATE employee
  update: async (id, employeeData) => {
    await delay(800);
    
    const index = mockEmployees.findIndex(emp => emp.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('کارمند یافت نشد');
    }
    
    mockEmployees[index] = {
      ...mockEmployees[index],
      ...employeeData,
      updated_at: new Date().toISOString()
    };
    
    return { 
      data: { 
        data: mockEmployees[index],
        message: 'اطلاعات کارمند با موفقیت بروزرسانی شد'
      } 
    };
  },

  // DELETE employee
  delete: async (id) => {
    await delay(600);
    
    const index = mockEmployees.findIndex(emp => emp.id === parseInt(id));
    
    if (index === -1) {
      throw new Error('کارمند یافت نشد');
    }
    
    mockEmployees.splice(index, 1);
    
    return { 
      data: { 
        message: 'کارمند با موفقیت حذف شد'
      } 
    };
  },

  // SEARCH employees
  search: async (query) => {
    await delay(600);
    
    const filteredData = mockEmployees.filter(emp => 
      emp.name.toLowerCase().includes(query.toLowerCase()) ||
      emp.email.toLowerCase().includes(query.toLowerCase()) ||
      emp.department.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      data: {
        data: filteredData,
        total: filteredData.length
      }
    };
  }
};