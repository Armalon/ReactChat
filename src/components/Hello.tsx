import * as React from 'react'

export interface Props {
    name: string
    enthusiasmLevel?: number
}

/*
function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Be more enthusiastic!')
    }

    return (
        <div className="hello">
            <div className="greetings">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}

*/

// OR

class Hello extends React.Component<Props, object> { // props, state
    render() {
        const { name, enthusiasmLevel = 1 } = this.props

        if (enthusiasmLevel <= 0) {
            throw new Error('Be more enthusiastic!')
        }

        return (
            <div className="hello">
                <div className="greetings">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        )
    }
}


function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!')
}

export default Hello;