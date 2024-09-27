import React, { useState, useEffect } from 'react';

function Popup() {
  const [isopen, setIsopen] = useState(false);

  // دالة لتبديل حالة isopen
  const handleClick = () => {
    setIsopen(!isopen);
  };

  useEffect(() => {
    // مستمع الحدث لتبديل حالة isopen عند النقر على أي مكان في الشاشة
    const handleClickAnywhere = () => {
      setIsopen(!isopen); // تبديل حالة isopen
    };

    // إضافة مستمع الحدث عند تحميل المكون
    document.addEventListener('click', handleClickAnywhere);

    // إزالة مستمع الحدث عند إلغاء تحميل المكون أو عند تحديث الحالة
    return () => {
      document.removeEventListener('click', handleClickAnywhere);
    };
  }, [isopen]); // هذا التابع يعتمد على isopen لإعادة التسجيل عند تغييره

  return (
    <div>
      {/* عنصر لفتح النافذة أو إغلاقها */}
      <button onClick={handleClick}>
        {isopen ? 'Close Popup' : 'Open Popup'}
      </button>

      {/* النافذة المنبثقة */}
      {isopen && (
        <div style={{ position: 'absolute', top: '100px', left: '100px', background: 'lightblue', padding: '20px', border: '1px solid black' }}>
          <p>This is a popup! Click anywhere to toggle.</p>
        </div>
      )}
    </div>
  );
}

export default Popup;
