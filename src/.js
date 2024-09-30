// import React, { useState } from 'react';
// import "./ChangePassword.css";
// import Button from "../Button";
// import SideMenu from '../SideMenu';
// import NavBar from '../NavBar';

// function ChangePassword() {
//   // حالة لإدارة رؤية كلمة المرور
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // دالة لتبديل الرؤية
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   return (
//     <div>
//       <NavBar />
//       <SideMenu />
//       <div className='changePass'>
//         <form>
//           <h3>تغيير كلمة المرور</h3>
          
//           <label>كلمة المرور الجديدة</label>
//           <div className="input-container">
//             <input
//               placeholder='ادخل كلمة المرور'
//               type={passwordVisible ? 'text' : 'password'}  {/* تغيير نوع الإدخال بناءً على حالة الرؤية */}
//             />
//             <span className="password-icon" onClick={togglePasswordVisibility}>
//               {/* أيقونة تظهر وتخفي كلمة المرور */}
//               {passwordVisible ? (
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* أيقونة لإظهار كلمة المرور */}
//                   <path d="M14.9019 16.0806C13.4842..." fill="#073B4C"/>
//                 </svg>
//               ) : (
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* أيقونة لإخفاء كلمة المرور */}
//                   <path d="M14.9019 16.0806C13.4842..." fill="#073B4C"/>
//                 </svg>
//               )}
//             </span>
//           </div>

//           <label>تاكيد كلمة المرور</label>
//           <div className="input-container">
//             <input
//               placeholder='ادخل كلمة المرور'
//               type={confirmPasswordVisible ? 'text' : 'password'}  {/* تغيير نوع الإدخال بناءً على حالة الرؤية */}
//             />
//             <span className="password-icon2" onClick={toggleConfirmPasswordVisibility}>
//               {/* أيقونة تظهر وتخفي تأكيد كلمة المرور */}
//               {confirmPasswordVisible ? (
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* أيقونة لإظهار تأكيد كلمة المرور */}
//                   <path d="M14.9019 16.0806C13.4842..." fill="#073B4C"/>
//                 </svg>
//               ) : (
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   {/* أيقونة لإخفاء تأكيد كلمة المرور */}
//                   <path d="M14.9019 16.0806C13.4842..." fill="#073B4C"/>
//                 </svg>
//               )}
//             </span>
//           </div>

//           <Button className="passBut">تغيير كلمة المرور</Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ChangePassword;
