import sup from '/whatsapp.svg';
import viber from '/viber.svg';
import telegram from '/telegram.svg'

export const End = () => {
  return (
    <>
    <div className='end'>
        <div>
            <p className='end-header'>О КОМПАНИИ</p>
            <p>Партнёрская программа</p>
            <p>Вакансии</p>
        </div>
        <div className='tableend'>
            <table >
                <thead>
                    <tr>
                    <th colSpan={2} style={{textAlign: 'start'}} className='end-header'>МЕНЮ</th>
                    </tr>
                </thead>
                <tbody className='centerreg'>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Расчет стоимости</td>
                    <td style={{textAlign: 'start'}} className='field over'> Кейсы</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Услуги</td>
                    <td style={{textAlign: 'start'}} className='field over'> Благодарственные письма</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Виджеты</td>
                    <td style={{textAlign: 'start'}} className='field over'> Сертификаты</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Интеграции</td>
                    <td style={{textAlign: 'start'}} className='field over'> Блог на Youtube</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Наши клиенты</td>
                    <td style={{textAlign: 'start'}} className='field over'> Вопрос / Ответ</td>
                    </tr>
                </tbody>
                <tbody className='centermob'>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Расчет стоимости</td>
                    <td style={{textAlign: 'start'}} className='field over'> Благодарность клиентов</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Услуги</td>
                    <td style={{textAlign: 'start'}} className='field over'> Кейсы</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Виджеты</td>
                    <td style={{textAlign: 'start'}} className='field over'> Сертификаты</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Интеграции</td>
                    <td style={{textAlign: 'start'}} className='field over'> Блог на Youtube</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field mob'> Наши клиенты</td>
                    <td style={{textAlign: 'start'}} className='field over'> Вопрос / Ответ</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='contacts'>
            <p className='end-header'>КОНТАКТЫ</p>
            <p>+7 555 555-55-55</p>
            <div >
                <img src={telegram} className='head icons'  alt='logo'/>
                <img src={viber} className='head icons'  alt='logo'/>
                <img src={sup} className='head icons' alt='logo'/>
            </div>
            <p>Москва, Путевой проезд 3с1, к 902</p>
        </div>
    </div>
    <div className='emblem'>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p className='confidentional'>Политика конфиденциальности</p>
    </div>
    </>
  )
}
