enum Colors {
  Normal = "lightgray",
  Danger = "#ff6161",
  Alert = "#feffb5",
  Happy = "#a6df90",
}

class ChaptersData {
  chapter: string;
  name: string;
  advice: string;
  prePage: string;
  pages: string[];

  constructor(
    chapter: string,
    name: string,
    advice: string,
    prePage: string,
    pages: string[]
  ) {
    this.chapter = chapter;
    this.name = name;
    this.advice = advice;
    this.prePage = prePage;
    this.pages = pages;
  }
}

export const chapters = [
  new ChaptersData(
    `Capítulo - 0: `,
    ` <strong style="color: ${Colors.Danger}" >Invasão</strong>`,
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174017961767002/rithual_pre_pagina_cap_0.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157000181461132/rithual_pagina_1_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157148840165406/rithual_pagina_2_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157176031846400/rithual_pagina_3_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212178354206/rithual_pagina_4_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212484534333/rithual_pagina_5_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157212820086784/rithual_pagina_6_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213235318864/rithual_pagina_7_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213537304586/rithual_pagina_8_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157213931577395/rithual_pagina_9_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375223541830/rithual_pagina_10_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375525539960/rithual_pagina_11_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157375844294687/rithual_pagina_12_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376146288741/rithual_pagina_13_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376481841282/rithual_pagina_14_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157376808984677/rithual_pagina_15_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377178087514/rithual_pagina_16_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377454919810/rithual_pagina_17_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157377819812010/rithual_pagina_18_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157378134388736/rithual_pagina_19_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454412001300/rithual_pagina_20_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454726561872/rithual_pagina_21_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157454999199844/rithual_pagina_22_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157455473160202/rithual_pagina_23_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157455808692234/rithual_pagina_24_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456102301736/rithual_pagina_25_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456400101416/rithual_pagina_26_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157456764993686/rithual_pagina_27_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157457125711872/rithual_pagina_28_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157457436094554/rithual_pagina_29_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548221796412/rithual_pagina_30_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548611870801/rithual_pagina_31_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157548964204575/rithual_pagina_32_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157549387812894/rithual_pagina_33_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157549731762260/rithual_pagina_34_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550167953488/rithual_pagina_35_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550461558865/rithual_pagina_36_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157550797115453/rithual_pagina_37_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157551082311830/rithual_pagina_38_cap_0.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141157551417860156/rithual_pagina_39_cap_0.png",
    ]
  ),
  new ChaptersData(
    "Capítulo - 1: ",
    "Padaria",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141174141802786836/rithual_aviso.png",
    "https://cdn.discordapp.com/attachments/421344962303623189/1141383080557428776/ritual_pre_pagina_cap_1.png",
    [
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383779659816960/ritual_pagina_1_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780179914894/ritual_pagina_2_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780511260742/ritual_pagina_3_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383780851011584/ritual_pagina_4_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383781320761384/ritual_pagina_5_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383781664706723/ritual_pagina_6_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782071545946/ritual_pagina_7_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782495166595/ritual_pagina_8_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383782805549156/ritual_pagina_9_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141383783233364048/ritual_pagina_10_cap_1.png",
      "https://cdn.discordapp.com/attachments/421344962303623189/1141385150178017321/ritual_pagina_11_cap_1.png",
    ]
  ),
];