class Role {
    constructor({ name, camp, key, icon, introduction } ={}) {
        this.name = name; // 身份名称
        this.camp = camp; // 身份阵营 Camp类
        this.key = key; // 身份key
        this.icon = icon; // 身份图标
        this.introduction = introduction; // 身份介绍
    }
}

export default Role;