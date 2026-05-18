import {
  FaTelegramPlane,
  FaUserAlt
} from "react-icons/fa";

export default function App() {

  return (

    <div>

      {/* Navbar */}

<div className="navbar">

  <div className="logo">
    ᴍᴏʜᴀᴍᴍᴇᴅ
  </div>

  <div
    style={{
      display:"flex",
      alignItems:"center",
      gap:"20px"
    }}
  >

    <div className="menu">

      <a href="#" className="nav-link">
        Hᴏᴍᴇ
      </a>

      <a href="#channels" className="nav-link">
        Cʜᴀɴɴᴇʟs
      </a>

      <a href="#bots" className="nav-link">
        Bᴏᴛs
      </a>

      <a href="#developer" className="nav-link">
        Dᴇᴠᴇʟᴏᴘᴇʀ
      </a>

    </div>

    <a
      href="https://t.me/Mr_Mohammed_29"
      target="_blank"
      className="open-btn"
    >
      📩 ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ
    </a>

  </div>

</div>
        <div
  style={{
    display:"inline-block",
    background:"#111827",
    color:"#8b5cf6",
    padding:"12px 20px",
    borderRadius:"30px",
    marginBottom:"20px",
    border:"1px solid #1e293b"
  }}
>
  Wᴇʟᴄᴏᴍᴇ Tᴏ MD Dᴇᴠᴇʟᴏᴘᴇʀ Yᴛ
</div>

      {/* Hero */}

      <div className="hero">

        <div className="hero-text">

          <h1>
            Exᴘʟᴏʀᴇ. Cᴏɴɴᴇᴄᴛ
            <br />
            Aᴜᴛᴏᴍᴀᴛᴇ.
            <span> Iɴɴᴏᴠᴀᴛᴇ.</span>
          </h1>

          <p>
            Pᴏᴡᴇʀғᴜʟ Tᴇʟᴇɢʀᴀᴍ Cʜᴀɴɴᴇʟs,
            Sᴍᴀʀᴛ Bᴏᴛs ᴀɴᴅ Aᴅᴠᴀɴᴄᴇᴅ Sᴏʟᴜᴛɪᴏɴs
          </p>

          <div className="hero-buttons">

            <a href="#channels" className="btn">
              ᴇxᴘʟᴏʀᴇ ᴏᴜʀ ᴄʜᴀɴɴᴇʟs
            </a>

            <a href="#bots" className="btn btn2">
              ᴠɪᴇᴡ ʙᴏᴛs
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt=""
          />

        </div>

      </div>

      {/* Stats */}

      <div className="stats">

        <div className="stat-box">
          <h1>3+</h1>
          <p>ᴄʜᴀɴɴᴇʟs</p>
        </div>

        <div className="stat-box">
          <h1>6+</h1>
          <p>ʙᴏᴛs</p>
        </div>

        <div className="stat-box">
          <h1>6+</h1>
          <p>ᴘʀᴏjᴇᴄᴛs</p>
        </div>

        <div className="stat-box">
          <h1>5+</h1>
          <p>ᴜsᴇʀs</p>
        </div>

        <div className="stat-box">
          <h1>1</h1>
          <p>ᴅᴇᴠᴇʟᴏᴘᴇʀ</p>
        </div>

      </div>

      {/* Channels */}

<h1 className="section-title">
  <FaTelegramPlane /> Oᴜʀ Cʜᴀɴɴᴇʟs
</h1>

<div id="channels" className="cards">

  <div className="card">

    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
      alt=""
    />

    <h2>ᴀɴɪᴍᴇ ᴜᴘᴅᴀᴛᴇs ᴀᴜ</h2>

    <p>
      📢 Aɴɪᴍᴇ Uᴘᴅᴀᴛᴇs Bᴏᴛ ғᴏʀ ʟᴀᴛᴇsᴛ ᴀɴɪᴍᴇ ɴᴇᴡs, ᴇᴘɪsᴏᴅᴇ ʀᴇʟᴇᴀsᴇs, ᴛʀᴀɪʟᴇʀs, ᴀɴᴅ ᴛʀᴇɴᴅɪɴɢ ᴀɴɪᴍᴇ ᴀʟᴇʀᴛs.
    </p>

    <a
      href="https://t.me/Anime_UpdatesAU"
      target="_blank"
      className="open-btn"
    >
      Jᴏɪɴ Cʜᴀɴɴᴇʟ
    </a>

  </div>

  <div className="card">

    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
      alt=""
    />

    <h2>ᴀɴɪᴍᴇ ᴡᴏʀʟᴅ</h2>

    <p>
      🌸 Aɴɪᴍᴇ Wᴏʀʟᴅ  ғᴏʀ ᴀɴɪᴍᴇs,ᴇᴘɪsᴏᴅᴇs, ᴍᴏᴠɪᴇs, ᴀɴᴅ ʏᴏᴜʀ ᴜʟᴛɪᴍᴀᴛᴇ ᴅᴇsᴛɪɴᴀᴛɪᴏɴ ғᴏʀ ᴀɴɪᴍᴇ ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ ᴏɴ Tᴇʟᴇɢʀᴀᴍ.
    </p>

    <a
      href="https://t.me/amime_in_hindi"
      target="_blank"
      className="open-btn"
    >
      Jᴏɪɴ Cʜᴀɴɴᴇʟ
    </a>

  </div>

  <div className="card">

    <img
      src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
      alt=""
    />

    <h2>ʙᴏᴛs sᴇʀᴠᴇʀ</h2>

    <p>
      ⚠️ Bᴏᴛ Sᴇʀᴠᴇʀ Sᴛᴀᴛᴜs Bᴏᴛ ᴛᴏ ɴᴏᴛɪғʏ ᴜsᴇʀs ᴀʙᴏᴜᴛ ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ, ᴅᴏᴡɴᴛɪᴍᴇ, ᴜᴘᴅᴀᴛᴇs, ᴀɴᴅ sᴇʀᴠᴇʀ ʀᴇᴄᴏᴠᴇʀʏ ᴀʟᴇʀᴛs. 
    </p>

    <a
      href="https://t.me/BotsServerDead"
      target="_blank"
      className="open-btn"
    >
      Jᴏɪɴ Cʜᴀɴɴᴇʟ
    </a>

  </div>

</div>

      {/* Bots */}

      <h1 className="section-title">
        <FaTelegramPlane /> Oᴜʀ Bᴏᴛs
      </h1>

      <div id="bots" className="cards">

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
           alt=""
          />

          <h2>ʀᴇɴᴀᴍᴇ ʙᴏᴛ 𝟸ɢʙ</h2>

          <p>
            📝 Aᴅᴠᴀɴᴄᴇᴅ Rᴇɴᴀᴍᴇ Bᴏᴛ ᴛᴏ ʀᴇɴᴀᴍᴇ Tᴇʟᴇɢʀᴀᴍ ғɪʟᴇs, ᴠɪᴅᴇᴏs, ᴀɴᴅ ᴅᴏᴄᴜᴍᴇɴᴛs ᴡɪᴛʜ ᴄᴜsᴛᴏᴍ ᴛʜᴜᴍʙɴᴀɪʟs, ᴍᴇᴛᴀᴅᴀᴛᴀ ᴀɴᴅ ᴄᴀᴘᴛɪᴏɴs.
          </p>

          <a
            href="https://t.me/Jinwoo_Rename_bot"
            target="_blank"
            className="open-btn"
          >
           Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
           alt=""
          />

          <h2>ғɪʟᴇ sᴛᴏʀᴇ ʙᴏᴛ</h2>

          <p>
             📁 Pᴏᴡᴇʀғᴜʟ Fɪʟᴇ Sᴛᴏʀᴇ Bᴏᴛ ᴛᴏ sᴀᴠᴇ, ᴍᴀɴᴀɢᴇ, ᴀɴᴅ sʜᴀʀᴇ Tᴇʟᴇɢʀᴀᴍ ғɪʟᴇs ᴡɪᴛʜ ᴘᴇʀᴍᴀɴᴇɴᴛ ᴀᴄᴄᴇss ʟɪɴᴋs.
          </p>

          <a
            href="https://t.me/AU_Luffy_Store_bot"
            target="_blank"
            className="open-btn"
          >
           Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
           alt=""
          />

          <h2>ғɪʟᴇ sᴛᴏʀᴇ ʙᴏᴛ 2</h2>

          <p>
             📁 Pᴏᴡᴇʀғᴜʟ Fɪʟᴇ Sᴛᴏʀᴇ Bᴏᴛ ᴛᴏ sᴀᴠᴇ, ᴍᴀɴᴀɢᴇ, ᴀɴᴅ sʜᴀʀᴇ Tᴇʟᴇɢʀᴀᴍ ғɪʟᴇs ᴡɪᴛʜ ᴘᴇʀᴍᴀɴᴇɴᴛ ᴀᴄᴄᴇss ʟɪɴᴋs.
          </p>

          <a
            href="https://t.me/OG_Anime_In_bot"
            target="_blank"
            className="open-btn"
          >
           Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
           alt=""
          />

          <h2>sᴛɪᴄᴋᴇʀ ɪᴅ ʙᴏᴛ</h2>

          <p>
            🎭 Sᴛɪᴄᴋᴇʀ ID Bᴏᴛ ᴛʜᴀᴛ ɪɴsᴛᴀɴᴛʟʏ sʜᴏᴡs sᴛɪᴄᴋᴇʀ ғɪʟᴇ IDs, ᴜɴɪǫᴜᴇ IDs, ᴇᴍᴏɪɪ ɪɴғᴏ, ᴀɴᴅ ᴘᴀᴄᴋ ᴅᴇᴛᴀɪʟs.
          </p>

          <a
            href="https://t.me/AU_StickerID_bot"
            target="_blank"
            className="open-btn"
          >
           Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
           alt=""
          />

          <h2>ɢʀᴏᴜᴘ ʜᴇʟᴘ ʙᴏᴛ</h2>

          <p>
            🤖 Sᴍᴀʀᴛ Gʀᴏᴜᴘ Hᴇʟᴘ Bᴏᴛ ᴡɪᴛʜ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ, ᴀᴜᴛᴏ ʀᴇᴘʟɪᴇs, ғɪʟᴛᴇʀs, ᴡᴇʟᴄᴏᴍᴇ ᴍᴇssᴀɢᴇs, ᴀɴᴅ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ᴛᴏᴏʟs.
         </p>

         <a
           href="https://t.me/TBMGFilms_Help_bot"
           target="_blank"
           className="open-btn"
         >
          Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

        <div className="card">

          <img
           src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
           alt=""
          />

          <h2>ᴘᴏsᴛ sᴇɴᴅᴇʀ ʙᴏᴛ</h2>

          <p>
            🚀 Aᴅᴠᴀɴᴄᴇᴅ Pᴏsᴛ Sᴇɴᴅᴇʀ Bᴏᴛ ᴡɪᴛʜ ᴀᴜᴛᴏ ᴘᴏsᴛɪɴɢ, ᴍᴇᴅɪᴀ sᴜᴘᴘᴏʀᴛ, ʙᴜᴛᴛᴏɴs, sᴄʜᴇᴅᴜʟɪɴɢ, ʙʀᴏᴀᴅᴄᴀsᴛ, ᴀɴᴅ ᴄʜᴀɴɴᴇʟ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ ғᴇᴀᴛᴜʀᴇs.
         </p>

         <a
           href="https://t.me/Beru_Filter_Bot"
           target="_blank"
           className="open-btn"
         >
          Oᴘᴇɴ ʙᴏᴛ
         </a>

       </div>

     </div>

      {/* Developer */}

      <h1 className="section-title">
        <FaUserAlt /> Developer
      </h1>

      <div id="developer" className="developer">

        <div className="dev-box">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />

          <div className="dev-content">

            <h1>
              ʜɪ , I'ᴍ <span>ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʏᴛ</span>
            </h1>

            <h3
              style={{
                marginTop: "10px",
                color: "#cbd5e1"
              }}
            >
              Fᴜʟʟ Sᴛᴀᴄᴋ Dᴇᴠᴇʟᴏᴘᴇʀ & Bᴏᴛ Dᴇᴠᴇʟᴏᴘᴇʀ
            </h3>

            <p>
              I ʙᴜɪʟᴅ ᴀᴅᴠᴀɴᴄᴇᴅ Tᴇʟᴇɢʀᴀᴍ ʙᴏᴛs,
              ʙᴇᴀᴜᴛɪғᴜʟ ᴡᴇʙsɪᴛᴇs ᴀɴᴅ ᴘᴏᴡᴇʀғᴜʟ
              ᴅɪɢɪᴛᴀʟ sᴏʟᴜᴛɪᴏɴs.
            </p>

            <div
  style={{
    display:"flex",
    gap:"15px",
    marginTop:"25px",
    flexWrap:"wrap"
  }}
>

  <a
    href="https://t.me/+ssaZDrj3Wr4wNzI1"
    target="_blank"
    className="open-btn"
  >
    ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ
  </a>

  <a
    href="https://t.me/Anime_UpdatesAU"
    target="_blank"
    className="open-btn"
  >
    Cʜᴀɴɴᴇʟ
  </a>

  <a
    href="https://github.com/MD-Developer-Yt"
    target="_blank"
    className="open-btn"
  >
    ɢɪᴛʜᴜʙ
  </a>

</div>

            <div className="skills">

              <div className="skill">ʀᴇᴀᴄᴛ</div>
              <div className="skill">ɴᴏᴅᴇ.js</div>
              <div className="skill">ᴍᴏɴɢᴏ ᴅʙ</div>
              <div className="skill">ᴘʏᴛʜᴏɴ</div>
              <div className="skill">ᴅᴏᴄᴋᴇʀ</div>
              <div className="skill">Jᴀᴠᴀsᴄʀɪᴘᴛ</div>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="footer">

  <div
    style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
      gap:"30px",
      textAlign:"left"
    }}
  >

    <div>

      <h2 style={{color:"#8b5cf6"}}>
        ᴍᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʏᴛ
      </h2>

      <p
        style={{
          marginTop:"10px",
          color:"#94a3b8"
        }}
      >
        Exᴘʟᴏʀᴇ. Cᴏɴɴᴇᴄᴛ. Aᴜᴛᴏᴍᴀᴛᴇ.
      </p>

    </div>

    <div>

      <h3>ǫᴜɪᴄᴋ ʟɪɴᴋs</h3>

      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"10px",
          marginTop:"15px"
        }}
      >

        <a href="#" className="nav-link">Hᴏᴍᴇ</a>
        <a href="#channels" className="nav-link">Cʜᴀɴɴᴇʟs</a>
        <a href="#bots" className="nav-link">Bᴏᴛs</a>
        <a href="#developer" className="nav-link">ᴅᴇᴠᴇʟᴏᴘᴇʀ</a>

      </div>

    </div>

    <div>

      <h3>Cᴏɴɴᴇᴄᴛ</h3>

      <div
        style={{
          display:"flex",
          gap:"15px",
          marginTop:"15px"
        }}
      >

        <a
          href="https://t.me/Mr_Mohammed_29"
          target="_blank"
          className="open-btn"
        >
          ᴛᴇʟᴇɢʀᴀᴍ
        </a>

      </div>

    </div>

  </div>

  <div
    style={{
      marginTop:"40px",
      borderTop:"1px solid #1e293b",
      paddingTop:"20px",
      textAlign:"center",
      color:"#94a3b8"
    }}
  >
    © 2026 ᴍᴏʜᴀᴍᴍᴇᴅ
  </div> 
    </div>  
   </div>
  );
}
