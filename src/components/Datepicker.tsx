import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DateSelect } from 'react-ymd-date-select/dist/esm/presets/vanilla';
import { DatePickerProps } from './utils';

const DatePicker: FC<DatePickerProps> = ({
	name,
	className,
	label,
	yearFormat = 'yyyy',
	monthFormat = 'MMMM',
	defaultValue = null,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const hasError = !!errors[name];
	const errorMessage = errors[name]?.message as string | undefined;

	// Get the current date in the desired format
	const currentDate = new Date().toISOString().slice(0, 7);

	// Format the defaultValue if provided
	let formattedDate = '';
	if (defaultValue) {
		const [month, year] = defaultValue.split('/');
		const date = new Date(Number(year), Number(month) - 1);
		formattedDate =
			date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
	}

	// Determine the default value to use
	const defaultValueToUse = formattedDate || currentDate;

	return (
		<div className="pb-2">
			<label htmlFor={name}>{label}</label>
			<div className={className}>
				<Controller
					control={control}
					name={name}
					defaultValue={defaultValueToUse}
					render={({ field }) => (
						<DateSelect
							{...field}
							yearFormat={yearFormat}
							monthFormat={monthFormat}
							hideDay
							firstYear={2024}
							lastYear={1900}
						/>
					)}
				/>
			</div>
			{hasError && errorMessage && (
				<span style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</span>
			)}
		</div>
	);
};

export default DatePicker;
