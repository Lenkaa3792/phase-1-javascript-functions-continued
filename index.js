function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(doing = "go to the office") {
  return `This Monday, I will ${doing}.`;
}
function wrapAdjective ( style = "*" )
{
    function inner ( special )
    {
        return `You are ${ style }${ special }${ style }!`;
    }
    return inner
}
