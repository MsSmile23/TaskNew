export const Center = () => {
    
  return (
    <>
    <div className='center'>
        <div className='center1'>
            <p className='Pay'>Зарабатывайте больше</p>
            <p className='wel'>с WELBEX</p>
            <p className='reg'>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className='center2'>
            <table className='centerreg'>
                <thead>
                    <tr>
                    <th colSpan={2}>Вместе с <span className='special three'>БЕСПЛАТНОЙ</span> <span className='special four'>КОСНУЛЬТАЦИЕЙ</span> мы дарим :</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{textAlign: 'end'}} className='field'><h3>ВИДЖИТЫ</h3> 30 готовых решений</td>
                    <td style={{textAlign: 'end'}} className='field'><h3>DASHBOARD</h3> с показателями вашего бизнеса</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'end'}} className='field'><h3>SKYPE АУДИТ</h3> отдела продаж и CRM системы</td>
                    <td style={{textAlign: 'end'}} className='field'><h3>35 ДНЕЙ</h3> использование CRM</td>
                    </tr>
                </tbody>
            </table>
            <table className='centermob'>
                <thead>
                    <tr>
                    <th colSpan={2} style={{textAlign: 'start'}}>Вместе с <span className='special threem'>бесплатной</span> <span className='special fourm'>консультацией</span> мы дарим :</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field'><span className='special three'>-</span> SKYPE АУДИТ</td>
                    <td style={{textAlign: 'start'}} className='field'><span className='special three'>-</span> 30 ВИДЖИТОВ</td>
                    </tr>
                    <tr>
                    <td style={{textAlign: 'start'}} className='field'><span className='special three'>-</span> DASHBOARD</td>
                    <td style={{textAlign: 'start'}} className='field'><span className='special three'>-</span> МЕСЯЦ AMOCRM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className='center-end'>
        <button className='Button'>Получить консультацию</button>
    </div>
    </>
  )
}


