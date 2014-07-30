/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'km', {
	title: 'Accessibility Instructions', // MISSING
	contents: 'មាតិកា​ជំនួយ។ ដើម្បី​បិទ​ផ្ទាំង​នេះ សូម​ចុច ESC ។',
	legend: [
		{
		name: 'ទូទៅ',
		items: [
			{
			name: 'របារ​ឧបករណ៍​កម្មវិធី​និពន្ធ',
			legend: 'Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button.' // MISSING
		},

			{
			name: 'ផ្ទាំង​កម្មវិធីនិពន្ធ',
			legend: 'Inside a dialog, press TAB to navigate to next dialog field, press SHIFT + TAB to move to previous field, press ENTER to submit dialog, press ESC to cancel dialog. For dialogs that have multiple tab pages, press ALT + F10 to navigate to tab-list. Then move to next tab with TAB OR RIGTH ARROW. Move to previous tab with SHIFT + TAB or LEFT ARROW. Press SPACE or ENTER to select the tab page.' // MISSING
		},

			{
			name: 'ម៉ីនុយបរិបទអ្នកកែសម្រួល',
			legend: 'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.' // MISSING
		},

			{
			name: 'ប្រអប់បញ្ជីអ្នកកែសម្រួល',
			legend: 'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.' // MISSING
		},

			{
			name: 'Editor Element Path Bar', // MISSING
			legend: 'Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor.' // MISSING
		}
		]
	},
		{
		name: 'ពាក្យបញ្ជា',
		items: [
			{
			name: 'ការ​បញ្ជា​មិនធ្វើវិញ',
			legend: 'ចុច ${undo}'
		},
			{
			name: 'ការបញ្ជា​ធ្វើវិញ',
			legend: 'ចុច ${redo}'
		},
			{
			name: 'ការបញ្ជា​អក្សរ​ដិត',
			legend: 'ចុច ${bold}'
		},
			{
			name: 'ការបញ្ជា​អក្សរ​ទ្រេត',
			legend: 'ចុច ${italic}'
		},
			{
			name: 'ពាក្យបញ្ជា​បន្ទាត់​ពីក្រោម',
			legend: 'ចុច ${underline}'
		},
			{
			name: 'ពាក្យបញ្ជា​តំណ',
			legend: 'ចុច ${link}'
		},
			{
			name: ' Toolbar Collapse command', // MISSING
			legend: 'Press ${toolbarCollapse}' // MISSING
		},
			{
			name: ' Access previous focus space command', // MISSING
			legend: 'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: ' Access next focus space command', // MISSING
			legend: 'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: 'ជំនួយ​ពី​ភាព​ងាយស្រួល',
			legend: 'ជួយ ${a11yHelp}'
		}
		]
	}
	],
<<<<<<< HEAD
	backspace: 'Backspace', // MISSING
=======
	backspace: 'លុបថយក្រោយ',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
	tab: 'Tab', // MISSING
	enter: 'Enter', // MISSING
	shift: 'Shift', // MISSING
	ctrl: 'Ctrl', // MISSING
	alt: 'Alt', // MISSING
<<<<<<< HEAD
	pause: 'Pause', // MISSING
	capslock: 'Caps Lock', // MISSING
	escape: 'Escape', // MISSING
	pageUp: 'Page Up', // MISSING
	pageDown: 'Page Down', // MISSING
	end: 'End', // MISSING
	home: 'Home', // MISSING
	leftArrow: 'Left Arrow', // MISSING
	upArrow: 'Up Arrow', // MISSING
	rightArrow: 'Right Arrow', // MISSING
	downArrow: 'Down Arrow', // MISSING
	insert: 'Insert', // MISSING
	'delete': 'Delete', // MISSING
	leftWindowKey: 'Left Windows key', // MISSING
	rightWindowKey: 'Right Windows key', // MISSING
	selectKey: 'Select key', // MISSING
	numpad0: 'Numpad 0', // MISSING
	numpad1: 'Numpad 1', // MISSING
	numpad2: 'Numpad 2', // MISSING
	numpad3: 'Numpad 3', // MISSING
	numpad4: 'Numpad 4', // MISSING
	numpad5: 'Numpad 5', // MISSING
	numpad6: 'Numpad 6', // MISSING
	numpad7: 'Numpad 7', // MISSING
	numpad8: 'Numpad 8', // MISSING
	numpad9: 'Numpad 9', // MISSING
	multiply: 'Multiply', // MISSING
	add: 'Add', // MISSING
	subtract: 'Subtract', // MISSING
	decimalPoint: 'Decimal Point', // MISSING
	divide: 'Divide', // MISSING
	f1: 'F1', // MISSING
	f2: 'F2', // MISSING
	f3: 'F3', // MISSING
	f4: 'F4', // MISSING
	f5: 'F5', // MISSING
	f6: 'F6', // MISSING
	f7: 'F7', // MISSING
	f8: 'F8', // MISSING
	f9: 'F9', // MISSING
	f10: 'F10', // MISSING
	f11: 'F11', // MISSING
	f12: 'F12', // MISSING
	numLock: 'Num Lock', // MISSING
	scrollLock: 'Scroll Lock', // MISSING
	semiColon: 'Semicolon', // MISSING
	equalSign: 'Equal Sign', // MISSING
	comma: 'Comma', // MISSING
	dash: 'Dash', // MISSING
	period: 'Period', // MISSING
	forwardSlash: 'Forward Slash', // MISSING
	graveAccent: 'Grave Accent', // MISSING
	openBracket: 'Open Bracket', // MISSING
	backSlash: 'Backslash', // MISSING
	closeBracket: 'Close Bracket', // MISSING
	singleQuote: 'Single Quote' // MISSING
=======
	pause: 'ផ្អាក',
	capslock: 'Caps Lock', // MISSING
	escape: 'ចាកចេញ',
	pageUp: 'ទំព័រ​លើ',
	pageDown: 'ទំព័រ​ក្រោម',
	end: 'ចុង',
	home: 'ផ្ទះ',
	leftArrow: 'ព្រួញ​ឆ្វេង',
	upArrow: 'ព្រួញ​លើ',
	rightArrow: 'ព្រួញ​ស្ដាំ',
	downArrow: 'ព្រួញ​ក្រោម',
	insert: 'បញ្ចូល',
	'delete': 'លុប',
	leftWindowKey: 'Left Windows key', // MISSING
	rightWindowKey: 'Right Windows key', // MISSING
	selectKey: 'ជ្រើស​គ្រាប់​ចុច',
	numpad0: 'Numpad 0',
	numpad1: 'Numpad 1',
	numpad2: 'Numpad 2',
	numpad3: 'Numpad 3',
	numpad4: 'Numpad 4',
	numpad5: 'Numpad 5',
	numpad6: 'Numpad 6',
	numpad7: 'Numpad 7',
	numpad8: 'Numpad 8',
	numpad9: 'Numpad 9',
	multiply: 'គុណ',
	add: 'បន្ថែម',
	subtract: 'ដក',
	decimalPoint: 'ចំណុចទសភាគ',
	divide: 'ចែក',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock', // MISSING
	scrollLock: 'បិទ​រំកិល',
	semiColon: 'ចុច​ក្បៀស',
	equalSign: 'សញ្ញា​អឺរ៉ូ',
	comma: 'ក្បៀស',
	dash: 'Dash', // MISSING
	period: 'ចុច',
	forwardSlash: 'Forward Slash', // MISSING
	graveAccent: 'Grave Accent', // MISSING
	openBracket: 'តង្កៀប​បើក',
	backSlash: 'Backslash', // MISSING
	closeBracket: 'តង្កៀប​បិទ',
	singleQuote: 'បន្តក់​មួយ'
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
} );
