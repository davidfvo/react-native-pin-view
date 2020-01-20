import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View, ViewPropTypes } from "react-native"
import PropTypes from "prop-types"
import PinViewStyle from "./PinViewStyle.js"

const ViewButton = ({
  activeOpacity,
  onButtonPress,
  buttonSize = 60,
  text,
  customComponent,
  customViewStyle,
  accessible,
  accessibilityLabel,
  disabled,
  customTextStyle,
}) => {
  return (
    <TouchableOpacity
      accessible={accessible}
      accessibilityRole="keyboardkey"
      accessibilityLabel={customComponent !== undefined ? accessibilityLabel : text}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={PinViewStyle.buttonContainer}
      onPress={onButtonPress}>
      <View
        style={[
          PinViewStyle.buttonView,
          customViewStyle,
          { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 },
        ]}>
        {customComponent !== undefined ? (
          customComponent
        ) : (
          <Text style={[PinViewStyle.buttonText, customTextStyle]}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const ViewInput = ({
  showInputText = false,
  inputTextStyle,
  size = 40,
  customStyle,
  text,
  inputFilledStyle = { backgroundColor: "#000" },
  inputEmptyStyle = { backgroundColor: "#FFF" },
}) => {
  if (showInputText) {
    return (
      <View
        style={[
          PinViewStyle.inputView,
          customStyle,
          { width: size, height: size, borderRadius: size / 2, alignItems: "center", justifyContent: "center" },
          text !== undefined ? inputFilledStyle : inputEmptyStyle,
        ]}>
        <Text style={[PinViewStyle.inputText, inputTextStyle]}>{text}</Text>
      </View>
    )
  } else {
    return (
      <View
        style={[
          PinViewStyle.inputView,
          customStyle,
          { width: size, height: size, borderRadius: size / 2 },
          text !== undefined ? inputFilledStyle : inputEmptyStyle,
        ]}
      />
    )
  }
}

const ViewHolder = () => {
  return <View style={PinViewStyle.buttonContainer} />
}

const PinView = React.forwardRef(
  (
    {
      buttonTextByKey,
      accessible,
      style,
      onButtonPress,
      onComplete,
      buttonAreaStyle,
      inputAreaStyle,
      inputViewStyle,
      activeOpacity,
      pinLength,
      buttonSize,
      leftCustomButton,
      rightCustomButton,
      buttonViewStyle,
      buttonTextStyle ,
      customLeftButtonViewStyle,
      customRightButtonViewStyle,
      inputEmptyStyle,
      inputFilledStyle,
      showInputText,
      inputTextStyle,
      inputSize,
      rightAccessibilityLabel,
      leftAccessibilityLabel,
      disabled,
      leftButtonDisabled,
      rightButtonDisabled,
    },
    ref
  ) => {
    const [input, setInput] = useState("")
    ref.current = {
      clear: () => {
        if (input.length > 0) {
          setInput(input.slice(0, -1))
        }
      },
    }
    useEffect(() => {
      if (input.length === pinLength) {
        onComplete(input)
      }
    }, [input, onComplete, pinLength])

    const onButtonPressHandle = (key, value) => {
      onButtonPress(key)
      if (input.length < pinLength) {
        setInput(input + "" + value)
      }
    }

    return (
      <View style={[PinViewStyle.pinView, style]}>
        <View style={[PinViewStyle.inputContainer, inputAreaStyle]}>
          {Array.apply(null, { length: pinLength }).map((e, i) => (
            <ViewInput
              inputTextStyle={inputTextStyle}
              showInputText={showInputText}
              inputEmptyStyle={inputEmptyStyle}
              inputFilledStyle={inputFilledStyle}
              text={input[i]}
              customStyle={inputViewStyle}
              size={inputSize}
              key={"input-view-" + i}
            />
          ))}
        </View>
        <View style={[PinViewStyle.buttonAreaContainer, buttonAreaStyle]}>
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("one", "1")}
            buttonSize={buttonSize}
            text={buttonTextByKey.one}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("two", "2")}
            buttonSize={buttonSize}
            text={buttonTextByKey.two}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("three", "3")}
            buttonSize={buttonSize}
            text={buttonTextByKey.three}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("four", "4")}
            buttonSize={buttonSize}
            text={buttonTextByKey.four}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("five", "5")}
            buttonSize={buttonSize}
            text={buttonTextByKey.five}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("six", "6")}
            buttonSize={buttonSize}
            text={buttonTextByKey.six}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("seven", "7")}
            buttonSize={buttonSize}
            text={buttonTextByKey.seven}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("eight", "8")}
            buttonSize={buttonSize}
            text={buttonTextByKey.eight}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("nine", "9")}
            buttonSize={buttonSize}
            text={buttonTextByKey.nine}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          {leftCustomButton !== undefined ? (
            <ViewButton
              disabled={leftButtonDisabled}
              accessible={accessible}
              activeOpacity={activeOpacity}
              accessibilityLabel={leftAccessibilityLabel}
              onButtonPress={() => onButtonPress("left")}
              customViewStyle={customLeftButtonViewStyle}
              customComponent={leftCustomButton}
            />
          ) : (
            <ViewHolder />
          )}
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("zero", "0")}
            buttonSize={buttonSize}
            text={buttonTextByKey.zero}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          {rightCustomButton !== undefined ? (
            <ViewButton
              disabled={rightButtonDisabled}
              accessible={accessible}
              activeOpacity={activeOpacity}
              accessibilityLabel={rightAccessibilityLabel}
              onButtonPress={() => onButtonPress("right")}
              customViewStyle={customRightButtonViewStyle}
              customComponent={rightCustomButton}
            />
          ) : (
            <ViewHolder />
          )}
        </View>
      </View>
    )
  }
)

PinView.defaultProps = {
  buttonTextByKey: {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  },
  accessible: false,
  onButtonPress: () => {},
  inputTextStyle : { color: "#FFF" },
  onComplete : () => {},
  buttonAreaStyle : { marginVertical: 12 },
  inputAreaStyle : { marginVertical: 12 },
  activeOpacity :0.9,
  buttonTextStyle : { color: "#FFF", fontSize: 30 },
  rightAccessibilityLabel : "right",
  leftAccessibilityLabel : "left",
  disabled: false,
  leftButtonDisabled: false,
  rightButtonDisabled : false,
}
PinView.propTypes = {
  onComplete: PropTypes.func.isRequired,
  pinLength: PropTypes.number.isRequired,

  accessible: PropTypes.bool,
  style : ViewPropTypes.style,
  onButtonPress: PropTypes.func,
  showInputText: PropTypes.bool,

  inputAreaStyle: ViewPropTypes.style,
  inputViewStyle: ViewPropTypes.style,
  inputTextStyle: Text.propTypes.style,
  inputViewEmptyStyle: ViewPropTypes.style,
  inputSize:PropTypes.number,
  inputViewFilledStyle: ViewPropTypes.style,

  rightAccessibilityLabel: PropTypes.string,
  rightButtonDisabled: PropTypes.bool,
  customRightButtonViewStyle: ViewPropTypes.style,
  rightCustomButton: PropTypes.element,

  leftAccessibilityLabel: PropTypes.string,
  leftButtonDisabled: PropTypes.bool,
  customLeftButtonViewStyle: ViewPropTypes.style,
  leftCustomButton: PropTypes.element,

  buttonTextByKey : PropTypes.object,
  buttonAreaStyle : ViewPropTypes.style,
  activeOpacity:PropTypes.number,
  buttonSize:PropTypes.number,
  buttonViewStyle: ViewPropTypes.style,
  buttonTextStyle: Text.propTypes.style,
  disabled: PropTypes.bool,
}

export default PinView
