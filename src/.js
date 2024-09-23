// import React, { useState } from "react";

// // بيانات ثابتة
// const data = [
//   "عنصر 1",
//   "عنصر 2",
//   "عنصر 3",
//   "عنصر 4",
//   "عنصر 5",
//   "عنصر 6",
//   "عنصر 7",
//   "عنصر 8",
//   "عنصر 9",
//   "عنصر 10",
// ];

// const PaginationComponent = ({ itemsPerPage }) => {
//   // 1. حالة لتتبع الصفحة الحالية
//   const [currentPage, setCurrentPage] = useState(1);

//   // 2. حساب عدد الصفحات بناءً على عدد العناصر لكل صفحة
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // 3. تحديد العناصر التي سيتم عرضها في الصفحة الحالية
//   const currentData = data.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // 4. الانتقال إلى الصفحة التالية
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // 5. العودة إلى الصفحة السابقة
//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // 6. الانتقال إلى صفحة محددة عند النقر على رقمها
//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <h2>الصفحة {currentPage}</h2>

//       {/* عرض البيانات للصفحة الحالية */}
//       <ul>
//         {currentData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* أزرار التنقل بين الصفحات */}
//       <button onClick={handlePreviousPage} disabled={currentPage === 1}>
//         السابق
//       </button>

//       {/* عرض أرقام الصفحات للتنقل */}
//       {Array.from({ length: totalPages }, (_, index) => (
//         <button
//           key={index + 1}
//           onClick={() => goToPage(index + 1)}
//           className={currentPage === index + 1 ? "active" : ""}
//         >
//           {index + 1}
//         </button>
//       ))}

//       <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//         التالي
//       </button>
//     </div>
//   );
// };

// // الاستخدام
// export default function App() {
//   return (
//     <div>
//       <PaginationComponent itemsPerPage={3} />
//     </div>
//   );
// }





import React, { useState } from "react";

const UserInputForm = () => {
  // 1. إنشاء حالة لكل مدخل بيانات
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // 2. دالة لتحديث حالة المدخلات عند الكتابة
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // الاحتفاظ بالبيانات القديمة
      [name]: value, // تحديث المدخل الجديد
    });
  };

  return (
    <div>
      <h2>أدخل بياناتك:</h2>

      <div>
        <label>الاسم:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>البريد الإلكتروني:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>العمر:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>

      {/* 4. عرض البيانات التي أدخلها المستخدم */}
      <div style={{ marginTop: "20px" }}>
        <h3>البيانات التي أدخلتها:</h3>
        <p>الاسم: {formData.name}</p>
        <p>البريد الإلكتروني: {formData.email}</p>
        <p>العمر: {formData.age}</p>
      </div>
    </div>
  );
};

// الاستخدام
export default function App() {
  return (
    <div>
      <UserInputForm />
    </div>
  );
}
