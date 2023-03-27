function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
mondayWork = function (activity='go to the office'){
    return `This Monday, I will ${activity}.`
}
const wrapAdjective= function (value='*'){
    return function (type='special'){
        return `You are ${value}${type}${value}!`
    }
}