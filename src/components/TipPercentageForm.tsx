import type { TipPercentageFormProps } from "../types"

const tipOptions = [
    { id: 'tip-10', value: 0.10, label: '10%' },
    { id: 'tip-20', value: 0.20, label: '20%' },
    { id: 'tip-50', value: 0.50, label: '50%' },
]

export default function TipPercentageForm({ tip, setTip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map((tipOption) => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            checked={tip === tipOption.value}
                            onChange={(e) => setTip(Number(e.target.value))}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
