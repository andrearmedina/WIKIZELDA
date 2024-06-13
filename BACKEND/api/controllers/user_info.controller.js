const UserInfo = require('../models/user_info.model')

const createUserInfo = async (req, res) => {
    try {
        const infoUser = await UserInfo.create(req.body)

        res.status(200).json({
            message: 'UserInfo created',
            result: infoUser,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating UserInfo',
            result: error
        })
    }
}

const updateUserInfo = async (req, res) => {
    try {
        const [result] = await User.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "UserInfo not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "UserInfo updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating UserInfo',
            result: error
        })
    }
}

const deleteUserInfo = async (req, res) => {
    try {
        const user = await User.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!user) {
            res.status(404).json({
                message: "UserInfo not deleted",
                result: user,
            })
        }

        res.status(200).json({
            message: "UserInfo DESTROYED",
            result: user,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting UserInfo',
            result: error
        })
    }
}

module.exports = {
    createUserInfo,
    updateUserInfo,
    deleteUserInfo
}