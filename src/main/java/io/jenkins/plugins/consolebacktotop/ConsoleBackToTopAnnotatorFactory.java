package io.jenkins.plugins.consolebacktotop;

import hudson.Extension;
import hudson.console.ConsoleAnnotator;
import hudson.console.ConsoleAnnotatorFactory;

/**
 * @author Stefan Welsch<stefan.welsch@b-nova.com>
 */
@Extension
public class ConsoleBackToTopAnnotatorFactory extends ConsoleAnnotatorFactory {

	@Override
	public ConsoleAnnotator newInstance(Object context) {
		return new ConsoleBackToTopAnnotator();
	}


}
