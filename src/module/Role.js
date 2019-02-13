class Role {
    constructor(params) {
        this.name = params.name; // 身份名称
        this.camp = params.camp; // 身份阵营 Camp类
        this.key = params.key; // 身份key
        this.icon = params.icon; // 身份图标
    }
}

export default Role;