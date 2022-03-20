$(function () {
    var form = layui.form


    // 自定义校验规则
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        samepwd: function (value) {
            if (value === $('[name=oldpwd]').val()) {
                return '新旧密码不能相同!'
            }
        },
        repwd: function (value) {
            if (value !== $('[name=newpwd]').val()) {
                return '两次密码不一致!'
            }


        }


    })

    //给表单绑定提交事件
    $('.layui-form').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg('更新密码失败!')
                }
                layui.layer.msg('更新密成功!')
                // 重置表单
                $('.layui-form')[0].reset()

            }
        })

    })

})