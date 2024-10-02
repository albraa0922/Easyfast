import React ,{ useState }from 'react'
import Button from "../Button"
import "./addNew.css" 
import  im from"../Imges/Rectangle 1074.png"

function AddNew({ openForm, sendData}) {
    const [formData ,setFormData] = useState({
        name :"",
        email:"",
        phon :"",
        uesrCategory:"",
        userRate:"",
        code:""
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData ({...formData, [name]:value})
    }
    
    const onSubmit = (event) => event.preventDefault();
    const closeAddNew = () => {
        openForm()
    }
    const handleClick = () => {
        openForm()
        sendData({
        name: formData.name,
        photo : {im},
        email: formData.email,
        code: formData.code,
        userCategory: formData.uesrCategory,
        userRate: formData.userRate,
        })
        setFormData({ name :"",
        email:"",
        phon :"",
        uesrCategory:"",
        userRate:"",
        code:""})
    }
  return (
      <div className='addNew'>
        <div className='theAadd'>
            <h2>إضافة عنصر جديد</h2>
            <span className='close' onClick={closeAddNew}>الغاء</span>
            <form className='addcont' onSubmit={onSubmit}>
                <div className='right'>
                <label>اسم المستخدم</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                </div>
                <div className='left'>
                    <label>البريد الإلكتروني</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='right'>
                    <label>رقم الهاتف</label>
                    <input
                        type="tel"
                        name="phon"
                        value={formData.phon}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='left'>
                    <label>فئة المستخدم</label>
                    <input
                        type="text"
                        name="uesrCategory"
                        value={formData.uesrCategory}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='right'>
                    <label>تصنيف المستخدم</label>
                    <input
                        type="text"
                        name="userRate"
                        value={formData.userRate}
                        onChange={handleInputChange}
                        />
                </div>
                <div className='left'>
                    <label>المعرف</label>
                    <input
                        type="tel"
                        name="code"
                        value={formData.code}
                        onChange={handleInputChange}
                    />
                </div>
                <Button  handleClick={handleClick} className="formBut"><svg width="58" height="18" viewBox="0 0 58 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9681 13.64V15H0.648125V13.64H1.51213V3.608H3.01613V9.56C3.49613 8.96267 3.92813 8.47733 4.31213 8.104C4.70679 7.73067 5.16546 7.42667 5.68813 7.192C6.21079 6.95733 6.81346 6.84 7.49613 6.84C8.84013 6.84 9.78946 7.256 10.3441 8.088C10.9095 8.90933 11.1921 9.87467 11.1921 10.984V13.64H12.9681ZM7.25613 8.2C5.79479 8.2 4.38146 9.29333 3.01613 11.48V13.64H9.68813V11.24C9.68813 10.376 9.48013 9.656 9.06413 9.08C8.64813 8.49333 8.04546 8.2 7.25613 8.2ZM5.68813 3.944H7.14413V5.512H5.68813V3.944ZM22.9048 13.64V15H12.9688V13.64H15.0488C14.8034 13.032 14.6808 12.1787 14.6808 11.08C14.6808 10.024 14.8088 9.208 15.0648 8.632C15.3208 8.04533 15.7261 7.62933 16.2808 7.384C16.8461 7.13867 17.6301 7.016 18.6328 7.016C19.4648 7.016 20.2168 7.05333 20.8888 7.128L21.4488 7.192V13.64H22.9048ZM16.2008 11.192C16.2008 11.8853 16.2488 12.4133 16.3448 12.776C16.4408 13.128 16.5634 13.416 16.7128 13.64H19.9288V8.408C19.2674 8.35467 18.8034 8.328 18.5368 8.328C17.8968 8.328 17.4114 8.41867 17.0807 8.6C16.7501 8.78133 16.5208 9.07467 16.3928 9.48C16.2648 9.88533 16.2008 10.456 16.2008 11.192ZM17.4808 3.944H18.9368V5.512H17.4808V3.944ZM28.0103 6.84C28.8529 6.84 29.5143 7.048 29.9943 7.464C30.4743 7.86933 30.7143 8.56267 30.7143 9.544V15H22.9062V13.64H29.2103V9.704C29.2103 8.68 28.6876 8.168 27.6423 8.168C27.1729 8.168 26.0689 8.25333 24.3303 8.424L24.2823 7.352C24.8583 7.21333 25.5036 7.096 26.2183 7C26.9436 6.89333 27.5409 6.84 28.0103 6.84Z" fill="#F3FCFF"/>
                        <path d="M55.75 4.5V13.5C55.75 14.2956 55.4339 15.0587 54.8713 15.6213C54.3087 16.1839 53.5456 16.5 52.75 16.5H45.25C44.4544 16.5 43.6913 16.1839 43.1287 15.6213C42.5661 15.0587 42.25 14.2956 42.25 13.5V11.1675C42.25 8.60353 43.2686 6.1446 45.0816 4.33159C46.8946 2.51858 49.3535 1.5 51.9175 1.5H52.75C53.5456 1.5 54.3087 1.81611 54.8713 2.37872C55.4339 2.94133 55.75 3.70435 55.75 4.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.25 11.295C42.25 7.425 46.375 10.545 48.7975 8.11496C51.22 5.68496 48.1225 1.5 51.985 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M45.25 12H52.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M51.25 9H52.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M52 6H52.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </Button>
            </form>
        </div>
      
    </div>
    
  )
}

export default AddNew
