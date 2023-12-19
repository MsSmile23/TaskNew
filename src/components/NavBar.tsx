import logo from '/logo_welbex.svg';
import sup from '/whatsapp.svg';
import viber from '/viber.svg';
import telegram from '/telegram.svg'

export const NavBar = () => {
  return (
    <>
    <div className='Header'>
        <div className='headercomp first'>
            <img src={logo} className='Logo' alt='logo'/>
            <p className='head'>Услуги</p>
            <p className='head'>Виджеты</p>
            <p className='head'>Интеграции</p>
            <p className='head'>Кейсы</p>
            <p className='head mediadel'>Сертификаты</p>
        </div>
        <div className='headercomp second'>
            <p className='head'> +7 555 555-55-55 </p>
            <img src={telegram} className='head'  alt='logo'/>
            <img src={viber} className='head'  alt='logo'/>
            <img src={sup} className='head' alt='logo'/>
        </div>
    </div>
    <div className='smallinfor'>
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </div>
    </>
  )
}
