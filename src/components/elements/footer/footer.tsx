import scss from './footer.module.scss'

export function Footer() {
  return (
    <footer>
      <div className={scss.footer}>
        <div className={scss.logo}>
          <div className={scss.img}>
            <img
              src="/logo/icon-azure-full.png"
              alt="ОБЛАСТНОЙ МОЛОДЕЖНЫЙ ЦЕНТР"
            />
          </div>
          <div className={scss.img}>
            <img src="/logo/kmp.png" alt="Комитет по молодежной политике" />
            <p>Комитет по молодежной политике</p>
          </div>
        </div>
        
        <div className={scss.info}>
          <div>
            <p>2025, ОМЦ "МАЯК", Все права защищены</p>
          </div>
          <div style={{textAlign: "end"}}>
            <a href="">Политика <br/> конфиденциальности</a>
          </div>
        </div>
      </div>
  
    </footer>
  )
}
