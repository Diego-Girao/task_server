const {upload} = require('../../utils');
class UserRoutes{
    
    build(controller){
        return [
            {
                method:"post",
                path:"/users",
                actions:[upload.any(),controller.insert]
            },
            {
                method:"get",
                path:"/users",
                actions:[controller.findAll]
            },
            {
                method:"get",
                path:"/users/:id",
                actions:[controller.findById]
            },
            {
                method:"put",
                path:"/users/:id",
                actions:[controller.update]
            },
            {
                method:"delete",
                path:"/users/:id",
                actions:[controller.remove]
            }
        ]
    }
}

module.exports = new UserRoutes();