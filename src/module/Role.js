class Role {
    constructor(params) {
        this.name = params.name; // 身份名称
        this.camp = params.camp; // 身份阵营 Camp类
        this.key = params.key; // 身份key
        this.icon = params.icon; // 身份图标
        this.introduction = params.introduction; // 身份介绍
    }
}

export default Role;